import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

function HoneyBookForm() {
  useEffect(() => {
    (function (h, b, s, n, i, p, e, t) {
      h._HB_ = h._HB_ || {};
      h._HB_.pid = i;
      t = b.createElement(s);
      t.type = "text/javascript";
      t.async = !0;
      t.src = n;
      e = b.getElementsByTagName(s)[0];
      e.parentNode.insertBefore(t, e);
    })(
      window,
      document,
      "script",
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js",
      "614633ed4147880006cb8212"
    );
  }, []);

  return (
    <Container>
      <div className="hb-p-614633ed4147880006cb8212-5"></div>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.honeybook.com/p.png?pid=614633ed4147880006cb8212"
        alt="Form"
      />
    </Container>
  );
}

export default HoneyBookForm;
