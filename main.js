import mm from 'micromongo';

export default class Collection extends Array {
	constructor(args) {
		super(...args || []);
		[
			'count',
			'find',
			'findOne',
			'deleteOne',
			'deleteMany',
			'remove',
			'insert',
			'insertOne',
			'insertMany'
		].forEach(_ => {
			this[_] = (...args) => mm[_](this, ...args);
		});
	}
}

