# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Key Pair for EC2 instance

Create a Key Pair for ssh communication to EC2 instance
1. Open EC2 console
2. Click link to 'Key Pair'
3. Click 'Create Key Pair'
4. Select RSA as security type
5. Name the key as you like
6. Download pem file to your host for further use

## Environment Variables

Set environment variables as like below:
```
export CDK_KEYPAIR=\<your key pair name\>
```

## Deploy

```
cdk deploy
```

## SSH login to an EC2 instance

SSH login to an EC2 instance as like:
```
ssh -i \<your .pem filename\> ec2-user@\<global ip address of your ec2 instance\>
```

## Clean up

1. Destroy CDK stack
```
cdk destroy
```

2. Remove Key Pair

