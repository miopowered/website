# Vault Overview

This menu is shown when a player executes the `/fairyvaults` command or a alias of it. It shows all vaults the player has and allows them to open a specific vault or open the customization menu.

For more information about the configuration of this menu, visit the [Basics](./basics.md) page.

## File

```yaml
# FairyVaults menu file. Visit https://miopowered.eu/fairyvaults for documentation.

# For styling, you can use the following formats:
# - Hex colors: <#FFFFFF>
# - Legacy colors: & (e.g. &a for green)
# - <gradient:#FFFFFF:#000000> for gradients
# - <rainbow> for rainbow text

title: "&8ʏᴏᴜʀ ᴠᴀᴜʟᴛѕ"
# v = vault item
# < = previous page
# > = next page
# other characters = static items or empty slots
layout:
  - x x x x x x x x x
  - . v v v v v v v .
  - x x x < x > x x x
locked-vault:
  name: "&8» &7ʟᴏᴄᴋᴇᴅ ᴠᴀᴜʟᴛ"
  material: MINECART
  lore:
    - "&r"
    - "&7You can unlock more vaults"
    - "&7by purchasing them in our store."
    - "&b&nstore.example.com"
vault:
  name: "&8» &bᴠᴀᴜʟᴛ &8• &7%name%"
  material: CHEST_MINECART
  lore:
    - "&8Your personal vault."
    - "&r"
    - "&8» &bInformation"
    - "&r"
    - "&7 Capacity: &f%full-slots%&8/&f%max-slots%"
    - "&r"
    - "&8[&7&nRight-click&r&7 to customize&8]"
    - "&8[&7&nLeft-click&r&7 to open&8]"
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
