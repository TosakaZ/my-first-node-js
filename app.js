(function(){		// 匿名関数 (function(){〜本文〜})();
	'use strict';
	const number = process.argv[2] || 0;
	// process.aragv[2]はNode.jsがデフォルトで提供する、コマンドラインの引数が入った配列
	// 0番：node コマンドのファイル自身のパス
	// 1番：実行しているプログラムのファイル自身のパス
	// 2番から自由に使える
	// || 0：process.aragv[2] が０やnullやundefinedなどのFalsy（偽の）値だった場合、number には0が代入
	let sum = 0;		// let：局所変数の宣言
	for (let i = 1; i <= number; i++) {
		sum = sum + i;
	}
	console.log(sum);
})();

