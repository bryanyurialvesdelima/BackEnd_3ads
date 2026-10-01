# Documento de Requisitos: Carrinho e Checkout
## Tema: Confeitaria Moderna & Alta Conversão

### 1. Visão Geral
O objetivo absoluto desta página é eliminar a distração e a fricção cognitiva. O usuário já tomou a decisão de compra; o sistema precisa apenas processar o pagamento da forma mais rápida possível.

### 2. Elementos de Interface (UI/UX)
- **Carrinho Lateral (Slide-out Cart):** Abre dinamicamente ao adicionar um item, mantendo o usuário no fluxo atual.
- **Checkout de Página Única (One-Page Checkout):** Sem etapas confusas. Dados pessoais, entrega e pagamento na mesma tela dividida em colunas claras.
- **Ícones de Confiança:** Exibição de selos de segurança e métodos de pagamento aceitos ao lado do botão "Finalizar Pedido".

### 3. Copywriting & Gatilhos de Conversão
- **Cross-selling Estratégico (Sem Fricção):** Exibir pequenos complementos com cópia focada em conveniência (ex: "Deseja adicionar uma Velha de Aniversário por R$ 2,00?").
- **Transparência de Valores:** Mostrar o valor do frete e descontos de forma explícita e calculada em tempo real (ex: "Você economizou R$ 15,00 no combo").

### 4. Requisitos Funcionais
- Preenchimento automático de endereço com base na digitação do CEP (API dos Correios ou similar).
- Opção de "Checkout como Convidado" habilitada por padrão (não obrigar o usuário a criar uma senha complexa para comprar um doce).
- Integração nativa com PIX gerando QR Code dinâmico e botão "Copia e Cola" na tela de confirmação imediata.
