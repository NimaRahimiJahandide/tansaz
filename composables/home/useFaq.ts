export const useFaq = () => {
  const activeItems = ref(new Set())
  
  const toggleItem = (id) => {
    if (activeItems.value.has(id)) {
      activeItems.value.delete(id)
    } else {
      activeItems.value.add(id)
    }
    // Trigger reactivity
    activeItems.value = new Set(activeItems.value)
  }
  
  const isActive = (id) => {
    return activeItems.value.has(id)
  }
  
  const closeAll = () => {
    activeItems.value.clear()
  }
  
  const openAll = () => {
    // This would need item IDs passed to it
    // activeItems.value = new Set(itemIds)
  }
  
  return {
    activeItems: readonly(activeItems),
    toggleItem,
    isActive,
    closeAll,
    openAll
  }
}