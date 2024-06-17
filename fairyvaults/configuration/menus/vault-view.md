# Vault View

This menu is shown when a player opens a vault. It shows the contents of the vault and allows the player to interact with the items inside.

For more information about the configuration of this menu, visit the [Basics](./basics.md) page.

## Changing the vault size

If you're planing to change the size of the vault, you need to update the layout and the default vault size in the general configuration.

::: warning
The layout must be either same or smaller than the vault size.
:::

## File

```yaml
# FairyVaults menu file. Visit https://miopowered.eu/fairyvaults for documentation.

# For styling, you can use the following formats:
# - Hex colors: <#FFFFFF>
# - Legacy colors: & (e.g. &a for green)
# - <gradient:#FFFFFF:#000000> for gradients
# - <rainbow> for rainbow text

title: "&8ᴠᴀᴜʟᴛ • %name%"
# i = vault inventory slot
# b = back button
# other characters = static items or empty slots
layout:
  - x x x x x x x x x
  - i i i i i i i i i
  - i i i i i i i i i
  - i i i i i i i i i
  - x x x x b x x x x
back-item:
  name: "&8» &7ʙᴀᴄᴋ"
  material: PLAYER_HEAD
  lore:
    - "&r"
    - "&7Go back to the vault overview."
  texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODY5NzFkZDg4MWRiYWY0ZmQ2YmNhYTkzNjE0NDkzYzYxMmY4Njk2NDFlZDU5ZDFjOTM2M2EzNjY2YTVmYTYifX19
static-items:
  x:
    name: "&r"
    material: BLACK_STAINED_GLASS_PANE
```
