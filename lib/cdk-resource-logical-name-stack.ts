import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';

import { Test } from '../lib/test-construct';

export class CdkResourceLogicalNameStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // original logical id: testRole836465CB
    // change construct identifier from "testRole" to "testRole22", new logical id: testRole22296F2086
    const testRole666 = new iam.Role(this, 'testRole22', {
      roleName: 'myName1',
      assumedBy: new iam.ServicePrincipal('sns.amazonaws.com')
    })

    // original logical id: testRole7777D1377AA
    const testRole777 = new iam.Role(this, 'testRole777', {
      roleName: 'myName2',
      assumedBy: new iam.ServicePrincipal('sns.amazonaws.com')
    })

    const test = new Test(this, 'myTest', {});

    const uid: string = testRole777.node.uniqueId;
    const _id: string = testRole777.node.id;
    const path: string = testRole777.node.path;

    
    console.log('uid from CdkResourceLogicalNameStack: ', uid);//uid from CdkResourceLogicalNameStack:  CdkResourceLogicalNameStacktestRole7770AFC03B8
    console.log('path from CdkResourceLogicalNameStack: ', path); //path from CdkResourceLogicalNameStack:  CdkResourceLogicalNameStack/testRole777

    console.log('id from CdkResourceLogicalNameStack: ', _id);//testRole777
  }
}
