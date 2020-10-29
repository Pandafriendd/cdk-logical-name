#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkResourceLogicalNameStack } from '../lib/cdk-resource-logical-name-stack';

const app = new cdk.App();
new CdkResourceLogicalNameStack(app, 'CdkResourceLogicalNameStack');
