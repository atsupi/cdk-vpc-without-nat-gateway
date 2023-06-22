import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2'

export class CdkVpcWithoutNatGatewayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, 'my-vpc-01', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/21'),
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'isolated',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ]
    })

    const webServer1 = new ec2.Instance(this, "webServer1", {
      vpc, //vpc
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL), //t2.small
      machineImage: new ec2.AmazonLinuxImage({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      keyName: process.env.CDK_KEYPAIR,
    });
    webServer1.connections.allowFromAnyIpv4(ec2.Port.tcp(22));

    const apiServer1 = new ec2.Instance(this, "apiServer1", {
      vpc, //vpc
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL), //t2.small
      machineImage: new ec2.AmazonLinuxImage({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
      keyName: process.env.CDK_KEYPAIR,
    });
    apiServer1.connections.allowFromAnyIpv4(ec2.Port.tcp(22));
  }
}
