import React from "react";

function TagBadge({ tag }: { tag: string }) {
  return (
    <div className="text-text1 text-sm py-1 px-3 bg-primary200 rounded-2xl">
      {tag}
    </div>
  );
}

export default TagBadge;
