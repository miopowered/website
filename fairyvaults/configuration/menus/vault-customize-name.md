# Vault Customize Name

This menu is shown when a player opens the vault customization menu and selects the "Customize Name" item. It allows the player to change the name of the vault.

Since this menu is a anvil menu, it doesn't have a layout. Instead it has a title and only the items that are used in the anvil menu.

## File

```yaml
# FairyVaults menu file. Visit https://miopowered.eu/fairyvaults for documentation.

# For styling, you can use the following formats:
# - Hex colors: <#FFFFFF>
# - Legacy colors: & (e.g. &a for green)
# - <gradient:#FFFFFF:#000000> for gradients
# - <rainbow> for rainbow text

title: "&8ᴄᴜѕᴛᴏᴍɪᴢᴇ ɴᴀᴍᴇ"
input-item:
  name: ""
  material: NAME_TAG
  lore:
    - "&r"
    - "&7Edit the name of your vault."
valid-output-item:
  name: "&8» &b%input%"
  material: GREEN_DYE
  lore:
    - "&r"
    - "&7Status: &aValid"
    - "&r"
    - "&7Click to confirm."
invalid-output-item:
  name: "&8» &b%input%"
  material: RED_DYE
  lore:
    - "&r"
    - "&7Status: &cInvalid"
    - "&r"
```
