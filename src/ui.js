const React = require("react");
const { Box } = require("ink");
const SelectInput = require("ink-select-input").default;
const open = require("open");

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  } else if (item.action) {
    item.action();
  }
};

const createList = (items) => {
  return items.map((item) => {
    return { ...item, key: item.label || item.url };
  });
};

const listItems = createList([
  {
    label: "Website 🌎",
    url: "https://blog.abhisheknaidu.tech",
  },
  {
    label: "GitHub 🦄",
    url: "https://github.com/abhisheknaiidu",
  },
  {
    label: "Twitter 👀",
    url: "https://twitter.com/abhisheknaiidu",
  },
  {
    label: "Linkedin 💼",
    url: "http://linkedin.com/in/abhisheknaiidu/",
  },
  {
    label: "Blog ✍",
    url: "https://blog.abhisheknaidu.tech",
  },
  {
    label: "Contact ✉️",
    url: "mailto:2018057@iiitdmj.ac.in",
  },
  {
    label: "Support my open source work ❤️",
    url: "https://www.buymeacoffee.com/abhisheknaiidu",
  },
  {
    label: "---------",
  },
  {
    label: "Quit",
    action() {
      process.exit();
    },
  },
]);

const renderResume = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box marginBottom={1} />
        <SelectInput items={listItems} onSelect={handleSelect} />
      </Box>
    </>
  );
};

module.exports = renderResume;
