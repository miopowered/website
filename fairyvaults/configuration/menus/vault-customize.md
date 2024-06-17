# Vault Customize

This menu is shown when a player opens the vault customization menu. It allows the player to change the name and the icon of the vault.

## File

```yaml
# FairyVaults menu file. Visit https://miopowered.eu/fairyvaults for documentation.

# For styling, you can use the following formats:
# - Hex colors: <#FFFFFF>
# - Legacy colors: & (e.g. &a for green)
# - <gradient:#FFFFFF:#000000> for gradients
# - <rainbow> for rainbow text

title: "&8ᴄᴜѕᴛᴏᴍɪᴢᴇ ʏᴏᴜʀ ᴠᴀᴜʟᴛ"
# 1 = edit name item
# 2 = edit icon item
# b = back button
# other characters = static items or empty slots
layout:
  - x x x x x x x x x
  - . . 1 . . . 2 . .
  - x x x x b x x x x
back-item:
  name: "&8» &7ʙᴀᴄᴋ"
  material: PLAYER_HEAD
  lore:
    - "&r"
    - "&7Go back to the vault overview."
  texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODY5NzFkZDg4MWRiYWY0ZmQ2YmNhYTkzNjE0NDkzYzYxMmY4Njk2NDFlZDU5ZDFjOTM2M2EzNjY2YTVmYTYifX19
edit-name-item:
  name: "&8» &bCustomize Name"
  material: NAME_TAG
  lore:
    - "&r"
    - "&7Edit the name of your vault."
edit-icon-item:
  name: "&8» &bCustomize Icon"
  material: BREWING_STAND
  lore:
    - "&r"
    - "&7Edit the icon of your vault."
static-items:
  x:
    name: "&r"
    material: BLACK_STAINED_GLASS_PANE
```
