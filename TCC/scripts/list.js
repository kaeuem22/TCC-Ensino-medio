const lista_Materiais = [
    {
        imagem: "https://th.bing.com/th/id/OIP.G3AjAkfywkbXVR9UB2JxNwHaHa?pid=ImgDet&rs=1",
        nome: "Buzzer",
        description: "Pequeno dispositivo em forma de cilindro usado para emitir sons com diversas frequências",
        preco:"R$ 18,69",
        link:"https://www.google.com/search?q=buzzer&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwj994f6_Ln6AhWhOLkGHT1eDCkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "http://www.multipecas.curitiba.br/loja/img/prod/sensor-de-nivel-de-agua-tipo-boia-on-off-90-graus-para-arduino_4361.jpg",
        nome: "Sensor de boia",
        description: "Sensor no estilo de boia para água, que pode ser aplicado de modo horizontal",
        preco:"R$ 19,99",
        link:"https://www.google.com/search?q=sensor+de+boia+90+arduino&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwjRpYa_krr6AhWpG7kGHZVXAVkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "https://www.filipeflop.com/wp-content/uploads/2017/07/2CB22-1.jpg",
        nome: "Jumpers",
        description: "Cabos usados para diversas conexões com arduino, protoboards e outros componentes",
        preco:"R$ 12,50 (conjunto com 40 peças)",
        link:"https://www.google.com/search?q=jumpers&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwjZgrTUk7r6AhWrCbkGHVS8BXkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "https://cf.shopee.com.br/file/a8be9235e4ac094510fc2c55a2d8886e",
        nome: "Resistores",
        description: "Reguladores de tensão usados para impedir que peças do sistema queimem devido a diferenças de tensão",
        preco:"R$ 14,90 (conjunto com 100 peças)",
        link:"https://www.google.com/search?q=resistores+1k&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwjwtLTxk7r6AhVzM7kGHXMPDAkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "https://www.baudaeletronica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/u/n/uno_cabo.jpg",
        nome: "Arduino",
        description: "Placa mãe usada para conecões, programaçao e execução de códigos",
        preco:"R$ 128,34",
        link:"https://www.google.com/search?q=arduino+uno&rlz=1C1GCEU_pt-BRBR1018BR1018&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjumuuzlLr6AhXKtJUCHbqXCVsQ_AUoAXoECAIQAw&biw=1366&bih=657&dpr=1"
    },
    {
        imagem: "https://images.tcdn.com.br/img/img_prod/650361/protoboard_400_furos_pontos_931_1_21a21bee5e662d3c1d7506f171b67c76.png",
        nome: "Protoboard",
        description: "Uma placa de ensaio ou matriz de contato (ou protoboard, ou breadboard em inglês) é uma placa com furos (ou orifícios) e conexões condutoras ultilizada para a montagem de protótipos e projetos em estado inicial",
        preco:"R$ 23,90",
        link:"https://www.google.com/search?q=protoboard&rlz=1C1GCEU_pt-BRBR1018BR1018&source=lnms&tbm=shop&sa=X&ved=2ahUKEwiGnP7qz7r6AhW-ppUCHVG_DFoQ_AUoAXoECAIQAw&biw=1366&bih=657&dpr=1"
    },
    {
        imagem: "https://www.usinainfo.com.br/1022527-thickbox_default/conector-de-bateria-9v-para-p4-ideal-para-arduino.jpg",
        nome: "Conector de bateria",
        description: "Um adaptador para baterias de 9v que permite realizar a conexão com o arduino",
        preco:"R$ 1,07",
        link:"https://www.google.com/search?q=conector+de+bateria+arduino&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwja74XP07r6AhVUANQKHc_RBD4Q_AUoAXoECAEQAQ"
    },
    {
        imagem: "https://www.terradospassaros.com/loja/images/2606_grd.jpg",
        nome: "Bebedouro para hamsters",
        description: "Um bebedouro para hamster e coelhos, animais que normalmente são matidos em gaiolas",
        preco:"R$ 15,00",
        link:"https://www.google.com/search?q=bebedouro+para+hamster&rlz=1C1GCEU_pt-BRBR1018BR1018&source=lnms&tbm=shop&sa=X&ved=2ahUKEwiT0eHA0Lr6AhWZuJUCHaZWChwQ_AUoAXoECAEQAw&biw=1366&bih=657&dpr=1"
    },
    {
        imagem: "https://www.eletronicacastro.com.br/43252-large_default/bateria-gp-9v.jpg",
        nome: "Bateria 9v",
        description: "Um bebedouro para hamster e coelhos, animais que normalmente são matidos em gaiolas",
        preco:"R$ 17,36",
        link:"https://www.google.com/search?q=bateria+9v&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwjOsaS41Lr6AhVaCbkGHRaKBFQQ_AUoAXoECAEQAQ"
    },
]