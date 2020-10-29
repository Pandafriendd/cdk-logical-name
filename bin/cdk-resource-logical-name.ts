#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkResourceLogicalNameStack } from '../lib/cdk-resource-logical-name-stack';
import * as iam from '@aws-cdk/aws-iam';

class MyStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: cdk.StackProps = {}) {
      super(scope, id, props);
  
      const testRole777 = new iam.Role(this, 'testRole777', {
        roleName: 'myName3',
        assumedBy: new iam.ServicePrincipal('sns.amazonaws.com')
      })

      const uid: string = testRole777.node.uniqueId;
      const path: string = testRole777.node.path;

      console.log('uid from MyStack: ', uid); //uid from MyStack:  MyStacktestRole777676291FA
      console.log('path from MyStack: ', path);//path from MyStack:  MyStack/testRole777
    }
}

const app = new cdk.App();

new CdkResourceLogicalNameStack(app, 'CdkResourceLogicalNameStack');
new MyStack(app, 'MyStack');
new MyStack(app, 'MyStack2');
