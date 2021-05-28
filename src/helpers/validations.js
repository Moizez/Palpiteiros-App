export default {

	cpf: async strCPF => {
		strCPF = strCPF?.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
		var Soma = 0;
		var Resto;
		if (strCPF === "00000000000") return false;

		for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF?.substring(i - 1, i)) * (11 - i);
		Resto = (Soma * 10) % 11;

		if ((Resto === 10) || (Resto === 11)) Resto = 0;
		if (Resto !== parseInt(strCPF?.substring(9, 10))) return false;

		Soma = 0;
		for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF?.substring(i - 1, i)) * (12 - i);
		Resto = (Soma * 10) % 11;

		if ((Resto === 10) || (Resto === 11)) Resto = 0;
		if (Resto !== parseInt(strCPF?.substring(10, 11))) return false;
		return true;
	},

	email: email => {
		return (/\S+@\S+\.\S+/).test(email);
	},

	cpfMask: async cpf => {
		return cpf
			?.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
			?.replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
			?.replace(/(\d{3})(\d)/, '$1.$2')
			?.replace(/(\d{3})(\d{1,2})/, '$1-$2')
			?.replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
	},

	phoneMask: async phone => {
		const phonevalido = phone
			?.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
			?.replace(/(\d{2})(\d)/, '($1)$2') // captura 1 grupos de numero o primeiro de 2 e o segundo de 1, e adiciona parenteses
			?.replace(/(\d{5})(\d)/, '$1-$2') // captura 2 grupos de numero o primeiro de 5 e o segundo de 1, e adiciona um traço
			?.replace(/(-\d{4})\d+?$/, '$1') // captura 4 numeros seguidos de um traço e não deixa ser digitado mais nada
		return phonevalido
	}

};