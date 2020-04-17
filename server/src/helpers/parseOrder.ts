export default (data: any) => {
    return (`
    <h3>Привет бизнесвуман, у тебя тут заказ</h3>
    <p>Количество шмоток: ${data.items.length}</p>
    <hr>
    <p>Заказ следующий:</p>
        ${items(data.items)}
    <hr>
    <p>Обновленые размеры: </p>
    ${items(data.newSize)}
    <hr>
    <p>Тип доставочки: ${data.delivery.delType} ${data.delivery.delType === 'Курьер' ?
            `<br/>Примерно: ${data.delivery.cost} рублясиков` : ''}</p>
    <hr>
    <p>Инфа по челиксу: </p>
    ${orderDetails(data.order)}
    <hr>
    <p>Коммент к заказу: </p>
    ${data.order.comment}
    <hr>
    <br/>
    <span>(c)2020 Danek in da Hauz</span>
    `)
}

function items(items: []) {
    const html = items.map(item => {
        return (
            `<li>
            <span>Имя айтема: ${item['title']}</span> <br/>
            <span>Размер итама: ${item['size']}</span>
            </li>
            `
        )
    });
    return `<ul>${html}</ul>`;
}

function orderDetails(info: any) {
    return (
        `
        <span>ФИO: ${info['firstName']} ${info['secondName']}</span> <br/>
        <span>Адрес: ${info['postIndex']} ${info['postAdress']}</span> <br/>
        <span>Доп инфа:</span>
        <ul>
            <li>email: ${info['email']}</li>
            <li>мабилка: ${info['mobile']}</li>
        </ul>
        `
    )
}