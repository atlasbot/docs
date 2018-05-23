# randstr [chars, length]

Returns a random string of characters.

## Example

*Input*
```
{randstr;qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_-.;{range;55;60}}
```
*Output*
```
Je-ACKgLOFxfZ.GaOLSvGygUCdbaIhOthbOHNNgmna-mr-MdPAiprXasLpyEqxGlPpj-VcKYHyeDFeVltVLz
```
!!! note
    This will return a random string of characters using the words as the possible characters and the length as the length of the randomised string. `{range;55;60}` will return a value between 55 and 60.

## Supports

* [Custom commands](/custom_commands/)
* [Join and leave messages](/join_leave_messages/)
* [Level-up messages](/levels/)
