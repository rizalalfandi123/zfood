function useDebounce<T>(value: globalThis.ComputedRef<T>) {
  const debounceValue = useState<T>();

  watch(value, async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, 1.5 * 1000);
    });

    debounceValue.value = value.value
  });

  return debounceValue
}

export default useDebounce