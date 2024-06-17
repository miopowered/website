# Vault Customize Icon

This menu is shown when a player opens the vault customization menu and selects the "Customize Icon" item. It allows the player to change the icon of the vault.

## File

```yaml
# FairyVaults menu file. Visit https://miopowered.eu/fairyvaults for documentation.

# For styling, you can use the following formats:
# - Hex colors: <#FFFFFF>
# - Legacy colors: & (e.g. &a for green)
# - <gradient:#FFFFFF:#000000> for gradients
# - <rainbow> for rainbow text

title: "&8ᴄᴜѕᴛᴏᴍɪᴢᴇ ʏᴏᴜʀ ᴠᴀᴜʟᴛ"
# i = icon material
# b = back button
# < = previous page
# > = next page
# other characters = static items or empty slots
layout:
  - x x x x x x x x x
  - . i i i i i i i .
  - . i i i i i i i .
  - . i i i i i i i .
  - x x < x b x > x x
back-item:
  name: "&8» &7ʙᴀᴄᴋ"
  material: PLAYER_HEAD
  lore:
    - "&r"
    - "&7Go back to the vault overview."
  texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODY5NzFkZDg4MWRiYWY0ZmQ2YmNhYTkzNjE0NDkzYzYxMmY4Njk2NDFlZDU5ZDFjOTM2M2EzNjY2YTVmYTYifX19
icon-item:
  name: "&8» &b%material%"
  lore:
    - "&r"
    - "&7Click to select this icon."
next-page-item:
  name: "&8» &bNext Page"
  material: PLAYER_HEAD
  lore:
    - "&r"
    - "&7Page: &b%current-page%&7/&b%total-pages%"
    - "&7Click to go to the next page."
  texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTAyZmEzYjJkY2IxMWM2NjM5Y2M5YjkxNDZiZWE1NGZiYzY2NDZkODU1YmRkZTFkYzY0MzUxMjRhMTEyMTVkIn19fQ==
previous-page-item:
  name: "&8» &bPrevious Page"
  material: PLAYER_HEAD
  lore:
    - "&r"
    - "&7Page: &b%current-page%&7/&b%total-pages%"
    - "&7Click to go to the previous page."
  texture: eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzQxMzNmNmFjM2JlMmUyNDk5YTc4NGVmYWRjZmZmZWI5YWNlMDI1YzM2NDZhZGE2N2YzNDE0ZTVlZjMzOTQifX19
static-items:
  x:
    name: "&r"
    material: BLACK_STAINED_GLASS_PANE
```
