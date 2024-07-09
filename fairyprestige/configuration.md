# Configuration

```yaml
# FairyPrestige configuration file. Visit https://miopowered.eu/fairyprestige for documentation.

# For Material names, visit the following links for a list of all available materials:
# 1.20.6: https://miopowered.eu/materials/1.20.6.html
# 1.8.8: https://miopowered.eu/materials/1.8.8.html

# Configure which database you want to use. SQLITE is just a flat file, MYSQL is a database server.
database:
  type: "SQLITE" # Supported options: SQLITE, MYSQL
  url: "jdbc:sqlite:plugins/FairyPrestige/data.db"
  # url: "jdbc:mysql://localhost:3306/database
  # username & password are only required when using MYSQL
  username: "root"
  password: "password"

# Enable if you want to show a menu when running /prestige
# that shows the requirements for the next prestige level.
# If disabled, the command will just try to prestige the player.
show-requirement-menu: true

# The template will be used when running the /prestige generate <amount> command.
template:
  # Which level to start from when generating levels.
  begin: 1
  # The formula is used for the requirement costs. Placeholders:
  # %current-level% - The current level of the prestige
  # %value% - The base value of the requirement
  # %amount% - The relative index of the current amount that is being generated
  formula: "%current-level% * 1.5 * %value%"
  # The first part is a placeholder and second part is the value.
  # Value can either be a number or a string. In string mode, it's case-sensitive.
  requirements:
    - "%vault_eco_balance%:250"
  # Actions that are run when a player prestiges.
  # Following actions are supported:
  # [console] <command> - Run a command as console.
  # [message] <message> - Send a message to the player.
  # [cmessage] <message> - Send a centered message to the player.
  # [player] <command> - Run a command as player.
  # [sound] <sound> <volume> <pitch> - Play a sound to the player.
  # [particle] <particle> <offsetX> <offsetY> <offsetZ> <count> - Spawn particles at the player.
  # Following placeholder can be used to display the cost of the requirement: %requirement_<index of requirement starting from 1>_cost%
  actions:
    - "[console] eco take %player% %requirement_1_cost%"
    - "[console] give %player% diamond 1"
    - "[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %prestige_level%!<n>"
    - "[sound] ENTITY_PLAYER_LEVELUP 1 1"
  # The lore will be displayed in the menu when showing the requirements.
  # Following placeholder can be used to display the cost of the requirement: %requirement_<index of requirement starting from 1>_cost%
  lore:
    - ""
    - "&d&l| &5Information"
    - "&d&l| &7Prestige to receive"
    - "&d&l| &7awesome perks."
    - ""
    - "&d&l| &5Requirements"
    - "&d&l| &f$&7%requirement_1_cost%"
    - ""
    - "&d&l| &5Perks"
    - "&d&l| &7Permanent Night Vision"

# The messages that are sent to the player.
messages:
  prefix: "&8[&5FairyPrestige&8]&7"
  plugin-reloaded: "%prefix% &7The plugin configuration has been reloaded."
  prestige-generated: "%prefix% &7You have generated %amount% levels."
  prestige-max: "%prefix% &cYou have reached the maximum prestige level."
  prestige-requirements-not-fulfilled: "%prefix% &cYou do not meet the requirements to unlock this prestige level."
  prestige-menu-title: "&8Prestige Requirements"

# The menu configuration for the requirement menu
menu:
  background-item:
    material: "BLACK_STAINED_GLASS_PANE"
    name: "&r"
  requirement-item:
    material: "ENCHANTED_BOOK"
    name: "&5Prestige %prestige_level% &7Requirements"

# Here will be all generated levels
levels:
  # Example with all possible options
  1:
    requirements:
      - "%vault_eco_balance%:250"
      - "%rivalhoes_essence%:50"
      - "%clv_player_level%:10"
      - "%luckperms_group%:default"
    actions:
      - "[console] eco take %player% %requirement_1_cost%"
      - "[console] essence remove %player% %requirement_2_cost%"
      - "[console] level remove %player% %requirement_3_cost%"
      - "[console] give %player% diamond 1"
      - "[message] &aYou have unlocked prestige %prestige_level%!"
      - "[cmessage] <n>&5&lNEW PRESTIGE UNLOCKED!<n>&7You have unlocked prestige %prestige_level%!<n>"
      - "[sound] ENTITY_PLAYER_LEVELUP 1 1"
      - "[particle] HEART"
    lore:
      - ""
      - "&d&l| &5Information"
      - "&d&l| &7Prestige to receive"
      - "&d&l| &7awesome perks."
      - ""
      - "&d&l| &5Requirements"
      - "&d&l| &f$&7%requirement_1_cost%"
      - "&d&l| &f%requirement_2_cost% &7Essence"
      - "&d&l| &f%requirement_3_cost% &7Level"
      - ""
      - "&d&l| &5Perks"
      - "&d&l| &7Permanent Night Vision"
      - "&d&l| &7Permanent Speed II"
```