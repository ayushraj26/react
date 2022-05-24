import React from "react";

export default function Alert(pops) {
  return (
    <div class="alert alert-secondary" role="alert">
      {pops.content}
    </div>
  );
}
