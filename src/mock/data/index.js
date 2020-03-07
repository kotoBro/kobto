import Mock from 'mockjs'

module.export = Mock.mock('user/info', () => {
    return Mock.mock({
        'name | 3': 'chenxikui',
        'age | +1': 19
    })
})

