const serializer = require('../src/index');

expect.addSnapshotSerializer(serializer);

const { wrap } = serializer;

const myLog = (msg: string) => {
	console.log('Executando myFunctionTest');
	console.log(`Msg = ${msg}`);
	console.log('% % % %');
};

const myLogWithLevel = (level: 'error' | 'info' | 'warn' | 'log') => {
	console[level](`Mensagem de nível '${level}'`);
};

const myLogWithReturn = (): string => {
	myLogWithLevel('info');
	console.log('processando...');

	return '2 + 2 = ' + (2 + 2);
};

const myLogWithNoData = (): any => {
	return undefined;
};

test('before', () => {
	expect(myLog('before')).toMatchSnapshot();
});

test('after', () => {
	expect(wrap(() => myLog('after'))).toMatchSnapshot();
});

test('error', () => {
	expect(wrap(() => myLogWithLevel('error'))).toMatchSnapshot();
});

test('info', () => {
	expect(wrap(() => myLogWithLevel('info'))).toMatchSnapshot();
});

test('log', () => {
	expect(wrap(() => myLogWithLevel('log'))).toMatchSnapshot();
});

test('warn', () => {
	expect(wrap(() => myLogWithLevel('warn'))).toMatchSnapshot();
});

test('with return', () => {
	expect(wrap(() => myLogWithReturn())).toMatchSnapshot();
});

test('with no data', () => {
	expect(wrap(() => myLogWithNoData())).toMatchSnapshot();
});
