<Menu
onClick={onClick}
icon={null}
mode="vertical"
>
{items.map((menuItem) => (
  <SubMenu
    key={menuItem.key}
    icon={menuItem.icon}
    title={menuItem.label }
  >
    {menuItem.children.map((subItem) => (
      subItem.type === 'group' ? (
        <ItemGroup key={subItem.key} title={subItem.label}>
          {subItem.children.map((groupItem) => (
            <Menu.Item key={groupItem.key}>
              {groupItem.label}
            </Menu.Item>
          ))}
        </ItemGroup>
      ) : (
        <Menu.Item key={subItem.key}>
          {subItem.label}
        </Menu.Item>
      )
    ))}
  </SubMenu>
))}
</Menu>