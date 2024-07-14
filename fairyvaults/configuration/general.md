# General

The general configuration file is located at `plugins/FairyVaults/config.yml`.

## Configuration Options

### Database

The plugin uses a database to store the vaults. By default, it uses an SQLite database located in the plugin folder. You can change the database URL to use a MySQL database.

Use the following format for MySQL databases: `jdbc:mysql://<host>:<port>/<database>`. Replace `<host>`, `<port>`, and `<database>` with your MySQL database details.

### Command Aliases

You can define custom aliases for the `/fairyvaults` command. Players can use these aliases to open the vault overview menu.

### Default Vault Name

When a player creates a new vault, the plugin uses the default name. You can use `%name%` to insert the player's name into the default name.

### Default Vault Icon

When a player creates a new vault, the plugin uses the default icon. You can set the default icon to any material available in Minecraft.

### Default Vault Size

When a player creates a new vault, the plugin uses the default size. The size should be a multiple of 9. Changing this value will not affect existing vaults.

::: warning
If you change the default vault size, make sure to update the size in the `menus/vault-view.yml` layout.
The value always needs to be same or higher than the size in the layout.
:::

### Name Pattern

When a player changes their vault name, the plugin uses a pattern to validate it. The pattern is a regex pattern.

### Default Vault Amount

When a player joins the server, they receive a certain amount of vaults. You can set the default amount of vaults a player should have initially.

### Selectable Icons

You can define a list of materials that players can select as a vault icon. Players can choose from these materials when they create a new vault.

## File

```yaml
# FairyVaults configuration file. Visit https://miopowered.eu/fairyvaults for documentation.

# For Material names, visit the following links for a list of all available materials:
# 1.20.6: https://github.com/mfnalex/Bukkit-Material-List/blob/main/versions/1.20.6.md
# 1.8.8: https://github.com/mfnalex/Bukkit-Material-List/blob/main/versions/1.8.8.md

# The database url to connect to. The default value is a sqlite database in the plugin folder.
# For MySQL databases, use the following format: jdbc:mysql://<host>:<port>/<database>
database-url: jdbc:sqlite:plugins/FairyVaults/database.db
database-username: root
database-password: ""

# Command aliases for the /fairyvaults command.
aliases:
  - fv
  - pv
  - vaults
  - vault
  - v

# The default name of a vault when it is created.
# Use %name% to insert the player's name.
default-vault-name: "%name%'s Vault"

# The default icon of a vault when it is created.
# If you want to set a custom model data, use the following format: <material>:<model-data>
default-vault-icon: CHEST_MINECART

# The size of the vault when it is created. Should be a multiple of 9.
# Cautious: Changing this value will not affect existing vaults.
# Caution: The size needs to be the same as in the menus/vault-view.yml layout.
default-vault-size: 27

# When a player changes their vault name, this pattern is used to validate it.
# This pattern is a regex pattern.
name-pattern: ^(?! )[a-zA-Z0-9 ,.'_\-()\[\]:]{2,31}(?<! )$

# How many vaults a player should have initially when they join the server.
default-vault-amount: 1

# This is the list of materials that can be selected as a vault icon.
# If you want to set a custom model data, use the following format: <material>:<model-data>
selectable-icons:
  - COAL
  - DIAMOND
  - EMERALD
  - IRON_INGOT
  - GOLD_INGOT
  - LAPIS_LAZULI
  - REDSTONE
  - NETHER_STAR
  - ENDER_PEARL
  - DIAMOND_SWORD
  - DIAMOND_CHESTPLATE
  - IRON_SWORD
  - BOOK
  - ENCHANTED_BOOK
  - EXPERIENCE_BOTTLE
  - GOLDEN_APPLE
  - APPLE
  - COOKED_BEEF
  - BUCKET
  - WATER_BUCKET
  - LAVA_BUCKET
  - NETHERRACK
  - TNT
  - BOW
  - DIAMOND_AXE
  - DIAMOND_SHOVEL
  - DIAMOND_HOE
  - DIAMOND_PICKAXE
  - COMPASS
  - CLOCK
  - CHEST_MINECART
  - WRITABLE_BOOK
  - OAK_PLANKS
  - OAK_LOG
  - STONE
  - RED_WOOL
  - CRAFTING_TABLE
  - ENCHANTING_TABLE
  - ENDER_CHEST
  - OBSIDIAN
  - BEDROCK
  - BEACON
  - FURNACE
```
