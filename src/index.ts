const RAW = Symbol.for('act-jest-snapshot-raw');
const CONSOLE = Symbol.for('act-jest-snapshot-console');

export interface IWrapper {
	[RAW]: string;
	[CONSOLE]: string;
}

export function test(something: any): something is IWrapper {
	return (
		something &&
		(typeof something[RAW] === 'string' ||
			typeof something[CONSOLE] === 'string')
	);
}

export function print(wrapper: IWrapper): string {
	return (
		(wrapper[RAW] ? wrapper[RAW] : '') +
		'~'.repeat(50) +
		'\n' +
		(wrapper[CONSOLE] ? wrapper[CONSOLE] : '')
	);
}

let buffer: string;

export function wrap(execute: any): IWrapper {
	const oldLog = console['log'];
	const oldError = console['error'];
	const oldWarn = console['warn'];
	const oldInfo = console['info'];

	buffer = '';
	console['log'] = (input: any) => (buffer += 'L:' + input + '\n');
	console['error'] = (input: any) => (buffer += 'E:' + input + '\n');
	console['warn'] = (input: any) => (buffer += 'W:' + input + '\n');
	console['info'] = (input: any) => (buffer += 'I:' + input + '\n');

	const value: any = execute();
	const result: IWrapper = { [RAW]: value, [CONSOLE]: buffer };

	console['log'] = oldLog;
	console['error'] = oldError;
	console['warn'] = oldWarn;
	console['info'] = oldInfo;

	return result;
}

export default wrap;
