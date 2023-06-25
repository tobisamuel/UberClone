import { DisabledInput, Input } from "./DestinationModal.styles";

type Props = {
  disabled: boolean;
  placeholder?: string;
  autofocus?: boolean;
  onChangeText?: () => void;
};

const DestinationInput = ({
  autofocus,
  disabled,
  onChangeText,
  placeholder,
}: Props) => {
  return disabled ? (
    <DisabledInput editable={false} placeholder={placeholder} />
  ) : (
    <Input
      autoFocus={autofocus}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default DestinationInput;
