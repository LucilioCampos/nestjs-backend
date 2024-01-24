import { BullModule } from '@nestjs/bull';
import { DynamicModule } from '@nestjs/common';
import currentConfig from 'app/config';

export function bullForTesting(): DynamicModule[] {
  return [BullModule.forRoot(currentConfig.backgroundJobs)];
}
