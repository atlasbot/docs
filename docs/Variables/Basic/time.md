# time [timezone]

Gets the time, timezone is not necessary. If you do choose to include a timezone, you must follow the [tz time zone format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

!!! note
    If you don't include a timezone, Atlas will use it's own timezone.

## Example

### Input

```json
{time}
{time;America/Los_Angeles}
```

### Output

```json
7:46:00 pm
4:46:00 am
```

## Supports

* [Custom commands](/Modules/custom_commands/)
* [Join and leave messages](/Modules/join_leave_messages/)
* [Level-up messages](/Modules/levels/)
