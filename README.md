# Toast-Provider
Uma forma de aproveitamento de código na utilização do toast nas aplicações Ionic

# Objetivo de um Provider toast
Um provider toast é importante no reaproveitamento de código, pois com este provider
a implementação do toast no aplicativo ionic se faz necessária somente 1 vez
e é somente injetar nos controles, e colocar as opções necessárias.

#Como Implementar
É somente importar nos controles desejados: import { ToastProvider } from '../../providers/toast-provider/toast'
Injetar no construtor: private toast: ToastProvider

E utilizar:

this.toast.showToast('Mensagem teste do provider', 2000, 'top');

Como exposto no provider, os únicos parâmetros obrigatórios são a mensagem e o tempo de duração, os demais são opcionais.

Isto facilita em muito na reutilização do código, pois não há a necessidade de implementação em todo o lugar onde o toast será utilizado.


Fique à vontade para utilizar e alterar nomes e parâmetros, pois o objetivo e colaborar para o crescimento do ionic.
