import consumerGenerator from './consumer-generator';
import { IBackgroundJobProducer } from '../contracts/interfaces';
import moduleGenerator from './module-generator';
import producerGenerator from './producer-generator';
import { Test, TestingModule } from '@nestjs/testing';

function createModule() {
  const queueName = 'test';
  const consumer = consumerGenerator({ queueName, concurrency: 10 });
  const producer = producerGenerator({ queueName });

  return {
    module: moduleGenerator({ queueName, consumer, producer }),
    producer,
  };
}

describe('moduleGenerator', () => {
  it('should be a function', () => {
    expect(typeof moduleGenerator).toBe('function');
  });

  it('should return a module', () => {
    expect(createModule().module).toBeDefined();
  });

  it('should return a producer', () => {
    expect(createModule().producer).toBeDefined();
  });
});
