import { useEffect, useState } from 'react';

export function useActiveTab(initialType, typeMapping) {
  const [activeTab, setActiveTab] = useState(typeMapping.indexOf(initialType ?? ''));

  useEffect(() => {
    setActiveTab(typeMapping.indexOf(initialType ?? ''));
  }, [initialType, typeMapping]);

  return { activeTab, setActiveTab };
}