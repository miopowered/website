# Basics

This covers the basic configuration options of all FairyVaults menus.

## Items

All items in the menus can be customized to your liking. You can completely change every attribute of an item, including the material, name, lore, and more.

Here is an example of all attributes you can change:

```yaml
# Example item
# Any value except material is optional and can be left out.
item:
  # Supports hex colors & gradients. Visit the faq for more information about hex & gradients.
  # Also you can use any placeholders from PlaceholderAPI
  name: "&aExample Item with <#FF0000>Hex Colors"
  # Any minecraft material, Visit the minecraft materials page for a list of all materials.
  material: DIAMOND
  # Supports hex colors & gradients. Visit the faq for more information about hex & gradients.
  # Also you can use any placeholders from PlaceholderAPI
  lore:
    - "&7This is an example item."
    - "<gradient:#FF0000:#00FF00>Gradient Lore"
  amount: 1
  # Requires the base64 encoded texture aka Value. Just copy Value from https://minecraft-heads.com/ and use it here.
  # Set material to PLAYER_HEAD when using a texture.
  texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWE0MmRjMDVjZDgzMzVmMTRjZTQ4YTY5MDM3YzFlNDM0ZDM1Zjg4NmY0YzRmYjk2MGZjYTY1NzIzNGFkNzVjYiJ9fX0="
  # If you want to set the skull owner, set the material to PLAYER_HEAD and use the skull owner.
  owner: "rexlManu"
  # To set custom model data, use this attribute.
  custom-model-data: 1
  # Some items like weapons or armor can have extra info in lore. To ignore that, set this to true.
  hide-flags: true
```

## Title

Each menu will have a `title` attribute. You can change the title of the menu to your liking.

You can also use custom characters for custom textures.

## Layout

All menus have a layout that defines the structure of the menu.

### Moving items around

Here is an example of a layout:

```yaml
layout:
- x x x x x x x x x
- i i i i i i i i i
- i i i i i i i i i
- i i i i i i i i i
- x x x x b x x x x

# To move the back button (b) to the bottom right, you can use the following layout:
layout:
- x x x x x x x x x
- i i i i i i i i i
- i i i i i i i i i
- i i i i i i i i i
- x x x x x x x x b
```

#### Repeating items

If you're planing to use custom textures for items and you want to have like 2x1 or 2x2 buttons, you can use a symbol in a layout multiple times.

For example in a menu with a `b` which is a back button, you can use it multiple times, if you want multiple back buttons.

```yaml
layout:
  - x x x x x x x x x
  - i i i i i i i i i
  - i i i i i i i i i
  - i i i i i i i i i
  - b b b b b b b b b # the whole row is filled with back buttons
```

### Changing rows

If you want to change the amount of rows in a menu, you can do so by changing the layout.

Here is an example of a layout with 6 rows:

```yaml
layout:
  - x x x x x x x x x
  - i i i i i i i i i
  - i i i i i i i i i
  - i i i i i i i i i
  - i i i i i i i i i
  - x x x x x x x x x
```

### Paginated Menus

Menus that show multiple items at once can be paginated like the vault overview menu or vault customize icon menu.

The amount of items per page or where the pagination should be placed can be changed in the layout.

::: tip
All paginated menus can have buttons for the previous and next page. The buttons are `<` for the previous page and `>` for the next page. Those are optional and can be left out.
:::

Here is an example of a paginated layout:

```yaml
layout:
- x x x x x x x x x
- . i i i i i i i .
- . i i i i i i i .
- . i i i i i i i .
- x x < x b x > x x

# If you instead want to show the icons more centered and structured
layout:
- x x x x x x x x x
- . . i i i i i . .
- . i i i i i i i .
- . . i i i i i . .
- x x < x b x > x x
```

## Static items

Menus can have static items. Those items don't have any functionality and are just there for decoration or information.
For example in the default configuration, all the `x` items are static items for black glass panes.

However you can also use static items for other purposes like adding a information item to the menu.

Here is an example of a static item:

```yaml
static-items:
  # The key is the character used in the layout.
  c:
    name: "&6Information"
    material: OAK_SIGN
    lore:
      - "&7Here you can find all the information you need."

# To place the static item in the layout, you can use the following layout:
layout:
  - x x x x c x x x x
  - . i i i i i i i .
  - . i i i i i i i .
  - . i i i i i i i .
  - x x < x b x > x x
```
