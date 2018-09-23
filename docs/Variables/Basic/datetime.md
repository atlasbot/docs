# datetime <timezone\>

Gets the date and time, timezone is not necessary. If you do choose to include a timezone, you must follow the [tz time zone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

!!! note
    If you don't include a timezone, Atlas will use it's own timezone.

## Example

### Input

```json
{datetime}
{datetime;America/Los_Angeles}
```

### Output

```json
May 27th 2018, 7:45:24 pm
May 27th 2018, 4:45:24 am
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
