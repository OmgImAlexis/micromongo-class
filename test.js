import test from 'ava';
import Collection from './main';

test('allows instantiating with no args', t => {
	const arr = [...new Collection([0, 1])];
	t.deepEqual(arr, [0, 1]);
});

test('returns array', t => {
	const arr = [...new Collection([0, 1])];
	t.deepEqual(arr, [0, 1]);
});

test('returns array from find', t => {
	const users = new Collection([{_id: 1, name: 'Alexis'}, {_id: 2, name: 'Jeff'}]);
	t.deepEqual(users.find(), [{_id: 1, name: 'Alexis'}, {_id: 2, name: 'Jeff'}]);
});

test('has same functions as micomongo', t => {
	const mm = new Collection();
	t.deepEqual(Object.keys(mm), [
		'count',
		'find',
		'findOne',
		'deleteOne',
		'deleteMany',
		'remove',
		'insert',
		'insertOne',
		'insertMany'
	]);
});
