#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LambdaDockerStack } from '../lib/lambda-docker-stack';

const app = new cdk.App();
new LambdaDockerStack(app, 'LambdaDockerStack', {});