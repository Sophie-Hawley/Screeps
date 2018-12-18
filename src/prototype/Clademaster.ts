import { messenger } from './messenger';
import { task } from './task';
import { taskqueue } from './taskqueue';
class Clademaster{
    messenger: messenger;
    name: string;
    currTask: task;
    taskQueue: taskqueue;
}