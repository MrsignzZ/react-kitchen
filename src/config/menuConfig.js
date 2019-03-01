const menuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: '家常菜',
    key: '/ordinary',
    children: [
      {
        title: '快手菜',
        key: '/ordinary/quick'
      },
      {
        title: '下饭菜',
        key: '/ordinary/meal'
      }
    ]
  },
  {
    title: '早餐',
    key: '/breakfast'
  },
  {
    title: '肉',
    key: '/meat',
    children: [
      {
        title: '猪肉',
        key: '/meat/pock'
      },
      {
        title: '鸡肉',
        key: '/meat/chicken'
      },
      {
        title: '鸭肉',
        key: '/meat/duck'
      },
      {
        title: '牛肉',
        key: '/meat/beef'
      },
      {
        title: '羊肉',
        key: '/meat/mutton'
      }
    ]
  },
  {
    title: '鱼',
    key: '/fish'
  },
  {
    title: '蔬菜',
    key: '/vegetables',
    children: [
      {
        title: '果实类蔬菜',
        key: '/vegetables/fruits'
      },
      {
        title: '根茎蔬菜',
        key: '/vegetables/roots'
      },
      {
        title: '菌菇类',
        key: '/vegetables/mushrooms'
      },
      {
        title: '叶类蔬菜',
        key: '/vegetables/leaves'
      }
    ]
  },
  {
    title: '汤羹',
    key: '/soup'
  },
  {
    title: '烘焙',
    key: '/bake'
  },
  {
    title: '主食',
    key: '/staple'
  },
  {
    title: '面',
    key: '/noodles'
  },
  {
    title: '素食',
    key: '/vegetarian'
  }
];
export default menuList;
