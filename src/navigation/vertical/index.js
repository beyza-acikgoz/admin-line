const navigation = () => {
  return [
    {
      title: 'Kullanıcı',
      icon: 'tabler:user',
      children: [
        {
          title: 'Tablo',
          path: '/apps/user/list'
        },
        {
          title: 'Görüntüle',
          children: [
            {
              title: 'Account',
              path: '/apps/user/view/account'
            },
            {
              title: 'Security',
              path: '/apps/user/view/security'
            },
            {
              title: 'Billing & Plans',
              path: '/apps/user/view/billing-plan'
            },
            {
              title: 'Notifications',
              path: '/apps/user/view/notification'
            },
            {
              title: 'Connection',
              path: '/apps/user/view/connection'
            }
          ]
        }
      ]
    },
    {
      title: 'Roller ',
      icon: 'tabler:settings',
      path: '/apps/roles'
    }
  ]
}

export default navigation
