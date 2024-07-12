# Configurations

::: code-group

```yaml [config.yml]
############################################################################
####                  FairyPrestige Configuration File                  ####
####     Visit https://miopowered.eu/fairyprestige for documentation    ####
############################################################################
# Material Names:
# For a list of all available materials, visit:
#   - 1.20.6: https://miopowered.eu/materials/1.20.6.html
#   - 1.8.8: https://miopowered.eu/materials/1.8.8.html
#
# Database Configuration:
# Configure which database you want to use. Supported options:
#   - SQLITE: Just a flat file.
#   - MYSQL: A database server.
# Note: 
# Username and password are only needed for MySQL.
#
# Example Database Configuration:
#   type: "SQLITE" 
#   url: "jdbc:sqlite:plugins/FairyPrestige/data.db"
#   username: "root"
#   password: "password"
#
# Show Requirement Menu:
# Enable if you want to show a menu when running /prestige
# that shows the requirements for the next prestige level.
# If disabled, the command will just try to prestige the player.

database:
  type: "SQLITE" 
  url: "jdbc:sqlite:plugins/FairyPrestige/data.db"
  username: "root"
  password: "password"

show-requirement-menu: true

#########################################################################
####                           Messages                              ####
#########################################################################
messages:
  prefix: "&8[&5FairyPrestige&8]&7"
  plugin-reloaded: "%prefix% &7The plugin configuration has been reloaded."
  prestige-generated: "%prefix% &7You have generated %amount% levels."
  prestige-max: "%prefix% &cYou have reached the maximum prestige level."
  prestige-requirements-not-fulfilled: "%prefix% &cYou do not meet the requirements to unlock this prestige level."
  prestige-menu-title: "&8Prestige Requirements"
  prestige-reset: "%prefix% &7You have &creset &7the prestige level of %player%."
  prestige-not-found: "%prefix% &cThe level %level% does not exist."
  prestige-set: "%prefix% &7You have &aset &7the prestige level of %player% to %level%."
  rebirth-generated: "%prefix% &7You have generated %amount% levels."
  rebirth-max: "%prefix% &cYou have reached the maximum rebirth level."
  rebirth-requirements-not-fulfilled: "%prefix% &cYou do not meet the requirements to unlock this rebirth level."
  rebirth-menu-title: "&8Rebirth Requirements"
  rebirth-reset: "%prefix% &7You have &creset &7the rebirth level of %player%."
  rebirth-not-found: "%prefix% &cThe level %level% does not exist."
  rebirth-set: "%prefix% &7You have &aset &7the rebirth level of %player% to %level%."
```

```yaml [prestige.yml]
#########################################################################
####                        Prestige Template                        ####
####             The template will be used when running              ####
####                  /prestige generate <amount>                    ####
#########################################################################
# This section describes the various configuration options available.
#
# begin: 
#   Which level to start from when generating levels.
#
# formula:
#   The formula used for the requirement costs. Placeholders:
#     %current-level% - The current level of the prestige
#     %value%         - The base value of the requirement
#     %amount%        - The relative index of the current amount being generated
#
# requirements:
#   The first part is a placeholder and the second part is the value.
#   Value can either be a number or a string. In string mode, it's case-sensitive.
#
# actions:
#   Actions that are run when a player prestiges. Supported actions:
#     [console] <command>   - Run a command as console.
#     [message] <message>   - Send a message to the player.
#     [cmessage] <message>  - Send a centered message to the player.
#     [actionbar] <message> - Send a message to the players actionbar
#     [player] <command>    - Run a command as player.
#     [sound] <sound> <volume> <pitch> - Play a sound to the player.
#     [particle] <particle> <offsetX> <offsetY> <offsetZ> <count> - Spawn particles at the player.
#   Placeholders:
#     %requirement_<index of requirement starting from 1>_cost% - Displays the cost of the requirement.
#
# lore:
#   The lore displayed in the menu when showing the requirements.
#   Placeholders:
#     %requirement_<index of requirement starting from 1>_cost% - Displays the cost of the requirement.
#

template:
  begin: 1
  formula: '%current-level% * 1.5 * %value%'
  requirements:
  - '%vault_eco_balance%:250'
  actions:
  - '[console] eco take %player% %requirement_1_cost%'
  - '[console] give %player% diamond 1'
  - '[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %level%!<n>'
  - '[sound] ENTITY_PLAYER_LEVELUP 1 1'
  lore:
  - ''
  - '&d&l| &5Information'
  - '&d&l| &7Prestige to receive'
  - '&d&l| &7awesome perks.'
  - ''
  - '&d&l| &5Requirements'
  - '&d&l| &f$&7%requirement_1_cost%'
  - ''
  - '&d&l| &5Perks'
  - '&d&l| &7Permanent Night Vision'

# ########################################################################
# ###                       Menu Configuration                        ####
# ########################################################################

menu:
  background-item:
    material: BLACK_STAINED_GLASS_PANE
    name: '&r'
  requirement-item:
    material: ENCHANTED_BOOK
    name: '&5Prestige %level% &7Requirements'
  confirm-item:
    material: LIME_DYE
    name: '&aConfirm'
  cancel-item:
    material: RED_DYE
    name: '&cCancel'

# ########################################################################
# ###                       Generated Levels                          ####
# ########################################################################

levels:
  # Example with all possible options
  '1':
    requirements:
    - '%vault_eco_balance%:375'
    actions:
    - '[console] eco take %player% 375'
    - '[console] give %player% diamond 1'
    - '[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %level%!<n>'
    - '[sound] ENTITY_PLAYER_LEVELUP 1 1'
    lore:
    - ''
    - '&d&l| &5Information'
    - '&d&l| &7Prestige to receive'
    - '&d&l| &7awesome perks.'
    - ''
    - '&d&l| &5Requirements'
    - '&d&l| &f$&7375'
    - ''
    - '&d&l| &5Perks'
    - '&d&l| &7Permanent Night Vision'
  '2':
    requirements:
    - '%vault_eco_balance%:750'
    actions:
    - '[console] eco take %player% 750'
    - '[console] give %player% diamond 1'
    - '[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %level%!<n>'
    - '[sound] ENTITY_PLAYER_LEVELUP 1 1'
    lore:
    - ''
    - '&d&l| &5Information'
    - '&d&l| &7Prestige to receive'
    - '&d&l| &7awesome perks.'
    - ''
    - '&d&l| &5Requirements'
    - '&d&l| &f$&7750'
    - ''
    - '&d&l| &5Perks'
    - '&d&l| &7Permanent Night Vision'
  '3':
    requirements:
    - '%vault_eco_balance%:1125'
    actions:
    - '[console] eco take %player% 1125'
    - '[console] give %player% diamond 1'
    - '[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %level%!<n>'
    - '[sound] ENTITY_PLAYER_LEVELUP 1 1'
    lore:
    - ''
    - '&d&l| &5Information'
    - '&d&l| &7Prestige to receive'
    - '&d&l| &7awesome perks.'
    - ''
    - '&d&l| &5Requirements'
    - '&d&l| &f$&71125'
    - ''
    - '&d&l| &5Perks'
    - '&d&l| &7Permanent Night Vision'
  '4':
    requirements:
    - '%vault_eco_balance%:1500'
    actions:
    - '[console] eco take %player% 1500'
    - '[console] give %player% diamond 1'
    - '[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %level%!<n>'
    - '[sound] ENTITY_PLAYER_LEVELUP 1 1'
    lore:
    - ''
    - '&d&l| &5Information'
    - '&d&l| &7Prestige to receive'
    - '&d&l| &7awesome perks.'
    - ''
    - '&d&l| &5Requirements'
    - '&d&l| &f$&71500'
    - ''
    - '&d&l| &5Perks'
    - '&d&l| &7Permanent Night Vision'
  '5':
    requirements:
    - '%vault_eco_balance%:1875'
    actions:
    - '[console] eco take %player% 1875'
    - '[console] give %player% diamond 1'
    - '[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %level%!<n>'
    - '[sound] ENTITY_PLAYER_LEVELUP 1 1'
    lore:
    - ''
    - '&d&l| &5Information'
    - '&d&l| &7Prestige to receive'
    - '&d&l| &7awesome perks.'
    - ''
    - '&d&l| &5Requirements'
    - '&d&l| &f$&71875'
    - ''
    - '&d&l| &5Perks'
    - '&d&l| &7Permanent Night Vision'

```

```yaml [rebirth.yml]
#########################################################################
####                        Rebirth Template                         ####
####             The template will be used when running              ####
####                  /rebirth generate <amount>                     ####
#########################################################################
# This section describes the various configuration options available.
# 
# begin: 
#   Which level to start from when generating levels.
#
# formula:
#   The formula used for the requirement costs. Placeholders:
#     %current-level% - The current level of the prestige
#     %value%         - The base value of the requirement
#     %amount%        - The relative index of the current amount being generated
#
# requirements:
#   The first part is a placeholder and the second part is the value.
#   Value can either be a number or a string. In string mode, it's case-sensitive.
#
# actions:
#   Actions that are run when a player prestiges. Supported actions:
#     [console] <command>   - Run a command as console.
#     [message] <message>   - Send a message to the player.
#     [cmessage] <message>  - Send a centered message to the player.
#     [actionbar] <message> - Send a message to the players actionbar
#     [player] <command>    - Run a command as player.
#     [sound] <sound> <volume> <pitch> - Play a sound to the player.
#     [particle] <particle> <offsetX> <offsetY> <offsetZ> <count> - Spawn particles at the player.
#   Placeholders:
#     %requirement_<index of requirement starting from 1>_cost% - Displays the cost of the requirement.
#
# lore:
#   The lore displayed in the menu when showing the requirements.
#   Placeholders:
#     %requirement_<index of requirement starting from 1>_cost% - Displays the cost of the requirement.
template:
  begin: 1
  formula: "%current-level% * 1.5 * %value%"
  requirements:
    - "%vault_eco_balance%:250"
    - "%fairyprestige_prestige_level%:50"
  actions:
    - "[console] eco take %player% %requirement_1_cost%"
    - "[console] give %player% diamond 1"
    - "[console] prestige reset %player%"
    - "[cmessage] <n>&2&lNEW REBIRTH UNLOCKED!<n>&7You have unlocked rebirth %level%!<n>"
    - "[sound] ENTITY_PLAYER_LEVELUP 1 1"
  lore:
    - ""
    - ""
    - "&a&l| &2Requirements"
    - "&a&l| &f$&7250"
    - "&a&l| &fPrestige lvl 50"
    - ""
    - "&a&l| &2Perks"
    - "&a&l| &71.25x Sell Multiplier"
    - "&a&l| &7Epic Crate key"

#########################################################################
####                       Menu Configuration                        ####
#########################################################################
menu:
  background-item:
    material: "BLACK_STAINED_GLASS_PANE"
    name: "&r"
  requirement-item:
    material: "BEACON"
    name: "&2Rebirth %level% &7Requirements"
  confirm-item:
    material: "LIME_DYE"
    name: "&aConfirm"
  cancel-item:
    material: "RED_DYE"
    name: "&cCancel"

#########################################################################
####                       Generated Levels                          ####
#########################################################################
levels:
  1:
    requirements:
      - "%vault_eco_balance%:250"
      - "%fairyprestige_prestige_level%:50"
    actions:
      - "[console] eco take %player% 250"
      - "[console] lp user %player% group set default"
      - "[console] prestige reset %player%"
      - "[console] multiplier add %player% %"
      - "[cmessage] <n>&2&lNEW REBIRTH UNLOCKED!<n>&7You have unlocked rebirth %level%!<n>"
      - "[sound] ENTITY_PLAYER_LEVELUP 1 1"
      - "[particle] HEART"
    lore:
      - ""
      - "&a&l| &2Requirements"
      - "&a&l| &f$&7250"
      - "&a&l| &fPrestige lvl 50"
      - ""
      - "&a&l| &2Perks"
      - "&a&l| &71.25x Sell Multiplier"
      - "&a&l| &7Epic Crate key"
```

:::

::: tip Requirements
Please note, for the requirements to work, you must have the placeholders installed with PlaceHolderAPI.