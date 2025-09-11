export const loadApplications = () => {
  const saved = localStorage.getItem('apps1');
  return saved ? JSON.parse(saved) : [];
};

export const saveApplications = (applications) => {
  localStorage.setItem('apps1', JSON.stringify(applications));
};
