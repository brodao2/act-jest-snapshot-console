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
