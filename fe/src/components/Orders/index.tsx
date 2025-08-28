import { Container } from "./styles"

import { OrdersBoard } from "../OrdersBoard"
import type { Order } from "../../types/Order"

const orders: Order[] = [
    {
        "_id": "68aee89d25ee12bfdd9b7de7",
        "table": "123",
        "status": "IN_PRODUCTION",
        "products": [
            {
                "product": {
                    "_id": "68ae7c6b9eb4493a955314dd",
                    "name": "Pizza quatro queijos",
                    "imagePath": "1756265579029-quatro-queijos.png",
                    "price": 40,

                },
                "quantity": 3,
                "_id": "68aee89d25ee12bfdd9b7de8"
            },
            {
                "product": {
                    "_id": "68aee57229d1e79ff3793380",
                    "name": "Coca cola",
                    "imagePath": "1756292466258-coca-cola.png",
                    "price": 7,
                },
                "quantity": 2,
                "_id": "68aee89d25ee12bfdd9b7de9"
            }
        ],
    }
]

export function Orders() {
    return (
        <Container>
            <OrdersBoard
                icon="🕒"
                title="Fila de espera"
                orders={orders}
            />
            <OrdersBoard
                icon="👨🏻‍🍳"
                title="Em preparação"
                orders={[]}
            />
            <OrdersBoard
                icon="✅"
                title="Pronto"
                orders={[]}

            />
        </Container>
    )
}
