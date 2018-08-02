# date [timezone]

Gets the date, timezone is not necessary. If you do choose to include a timezone, you must follow the [tz time zone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

!!! note
    If you don't include a timezone, Atlas will use it's own timezone.

## Example

### Input

```json
{date}
{date;America/Los_Angeles}
```

### Output

```json
May 27th 2018
May 27th 2018
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
