#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkVpcWithoutNatGatewayStack } from '../lib/cdk-vpc-without-nat-gateway-stack';

const app = new cdk.App();
new CdkVpcWithoutNatGatewayStack(app, 'CdkVpcWithoutNatGatewayStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});