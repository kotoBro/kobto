import Mock from 'mockjs'

module.export = [
    Mock.mock('user/info', {
        'data|5': [
            {
                'key|+1': 1,
                'words|1': ['哈哈', '嘿嘿', 'biubiu'],
                'activity|1': ['吃饭', '睡觉', '打豆豆']
            }
        ]
    }
    )
]
