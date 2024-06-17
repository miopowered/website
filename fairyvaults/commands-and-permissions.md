# Commands and Permissions

::: tip Command Arguments

- Arguments inside `<` and `>` are required.
- Arguments inside `[` and `]` are optional.
  :::

| Command                                       | Description                                         | Permission                         |
| --------------------------------------------- | --------------------------------------------------- | ---------------------------------- |
| `/fairyvaults`                                | Open the overview menu.                             | `fairyvaults.command.open`         |
| `/fairyvaults <number>`                       | Open your vault directly.                           | `fairyvaults.command.open`         |
| `/fairyvaults admin reload`                   | Reload all configs.                                 | `fairyvaults.command.admin.reload` |
| `/fairyvaults admin give <player> [amount]`   | Give a vault to a player.                           | `fairyvaults.command.admin.give`   |
| `/fairyvaults admin view <player> [number]`   | View a player’s vault overview or directly a vault. | `fairyvaults.command.admin.view`   |
| `/fairyvaults admin delete <player> [number]` | Delete all or a single vault from a player.         | `fairyvaults.command.admin.delete` |
| `/fairyvaults admin clear <player> [number]`  | Clear all or a single vault from a player.          | `fairyvaults.command.admin.clear`  |
| `fairyvaults.vault.<amount>`                  | Give players vaults through permissions.            | `fairyvaults.vault.<amount>`       |

## Give vaults to players

### Permission based

You can give players vaults by using the permission `fairyvaults.vault.<amount>`. Replace `<amount>` with the number of vaults you want to give to the player.

Those vaults are given to the player when they join the server or interact with the vault overview menu.

The vaults will not be removed from the player when they lose the permission.

### Command based

You can also give vaults to players using the command `/fairyvaults admin give <player> [amount]`. Replace `<player>` with the player’s name and `[amount]` with the number of vaults you want to give to the player.

## Vault numbering

The number is based on the count of vaults the player has. The first vault is `1`, the second vault is `2`, and so on, ordered by the time the player received the vaults.
