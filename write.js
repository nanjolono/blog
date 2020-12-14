function filterMenuRoutes(router) {
  debugger
  let result = []
  result = router.filter((r) => {
    if (r.children && r.children.length > 0) {
      r.children = result = filterMenuRoutes(r.children)
      return result
    } else {
      return !r.meta.isFunctional
    }
  })
  return result
}

const asyncRoutes = [
  {
    path: '/merchant',
    name: 'Merchant',
    children: [
      {
        path: 'infoMng',
        name: 'InfoMng',
        meta: {
          isFunctional: false,
        },
      },
      {
        path: 'infoMng/add',
        name: 'InfoMngAdd',
        meta: {
          isFunctional: true, // 功能模块
        },
      },
    ],
    meta: {
      icon: '',
      isFunctional: false,
    },
  },
  {
    path: '/auditRecord',
    name: 'AuditRecord',
    meta: {
      icon: '',
      // roles: []
      isFunctional: false,
    },
  },
]

const abc = filterMenuRoutes(asyncRoutes)
console.log(abc)