import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

// Проверка по значению
assert.deepEqual({}, { w: 't' }); // всё ок
assert.deepEqual({ key: 'value' }, { key: 'value' }); // всё ок
