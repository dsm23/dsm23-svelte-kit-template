import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import CheckboxItem from "./CheckboxItem.svelte";
import Content from "./Content.svelte";
import GroupHeading from "./GroupHeading.svelte";
import Item from "./Item.svelte";
import Label from "./Label.svelte";
import RadioItem from "./RadioItem.svelte";
import Separator from "./Separator.svelte";
import Shortcut from "./Shortcut.svelte";
import SubContent from "./SubContent.svelte";
import SubTrigger from "./SubTrigger.svelte";

const Sub = DropdownMenuPrimitive.Sub;
const Root = DropdownMenuPrimitive.Root;
const Trigger = DropdownMenuPrimitive.Trigger;
const Group = DropdownMenuPrimitive.Group;
const RadioGroup = DropdownMenuPrimitive.RadioGroup;

export {
  CheckboxItem,
  Content,
  Root as DropdownMenu,
  CheckboxItem as DropdownMenuCheckboxItem,
  Content as DropdownMenuContent,
  Group as DropdownMenuGroup,
  GroupHeading as DropdownMenuGroupHeading,
  Item as DropdownMenuItem,
  Label as DropdownMenuLabel,
  RadioGroup as DropdownMenuRadioGroup,
  RadioItem as DropdownMenuRadioItem,
  Separator as DropdownMenuSeparator,
  Shortcut as DropdownMenuShortcut,
  Sub as DropdownMenuSub,
  SubContent as DropdownMenuSubContent,
  SubTrigger as DropdownMenuSubTrigger,
  Trigger as DropdownMenuTrigger,
  Group,
  GroupHeading,
  Item,
  Label,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Shortcut,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
};
