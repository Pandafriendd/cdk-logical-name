import * as iam from '@aws-cdk/aws-iam';

import * as cdk from '@aws-cdk/core';

export class Test extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const testRole777 = new iam.Role(this, 'testRole777', {
      roleName: 'myName4',
      assumedBy: new iam.ServicePrincipal('sns.amazonaws.com')
    })

    const uid: string = testRole777.node.uniqueId;
    const _id: string = testRole777.node.id;
    const path: string = testRole777.node.path;

    
    console.log('uid from Test: ', uid);
    console.log('path from Test: ', path);
    console.log('id from Test: ', _id);
  }
}
